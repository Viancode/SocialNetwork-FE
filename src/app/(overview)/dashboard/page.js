"use client"
import React, {useState, useEffect, useCallback} from 'react';
import {useSearchParams, usePathname, useRouter} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

// Mock data for invoices
const mockInvoices = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    customer: `Customer ${i + 1}`,
    amount: Math.floor(Math.random() * 1000) + 100,
    status: ['Paid', 'Pending', 'Overdue'][Math.floor(Math.random() * 3)]
}));

const ITEMS_PER_PAGE = 20;

export default function Dashboard() {
    const [invoices, setInvoices] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const query = searchParams.get('query') || '';
    const currentPage = Number(searchParams.get('page') || '1');

    const loadInvoices = useCallback(() => {
        const filteredInvoices = mockInvoices.filter(invoice =>
            invoice.customer.toLowerCase().includes(query.toLowerCase()) ||
            invoice.status.toLowerCase().includes(query.toLowerCase())
        );

        const newInvoices = filteredInvoices.slice(0, currentPage * ITEMS_PER_PAGE);
        setInvoices(newInvoices);
        setHasMore(newInvoices.length < filteredInvoices.length);
    }, [query, currentPage]);

    useEffect(() => {
        loadInvoices();
    }, [loadInvoices]);

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const loadMore = () => {
        const params = new URLSearchParams(searchParams);
        params.set('page', (currentPage + 1).toString());
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Invoice Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <Input
                        placeholder="Search invoices..."
                        onChange={(e) => handleSearch(e.target.value)}
                        defaultValue={query}
                    />
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.customer}</TableCell>
                                <TableCell>${invoice.amount}</TableCell>
                                <TableCell>{invoice.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {hasMore && (
                    <div className="mt-4 text-center">
                        <Button onClick={loadMore}>Load More</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}