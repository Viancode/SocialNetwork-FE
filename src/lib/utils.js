import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function getAvatarFallback(name) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
}

export function capitalizeFirstLetter(input) {
    if (!input) {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
