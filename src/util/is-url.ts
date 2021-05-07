import { URL } from "url";

export function isUrl(check: string): boolean {
    let url: URL;
    try {
        url = new URL(check);
    } catch (err) {
        return false;
    }

    if (url.href !== check || (url.protocol !== 'http:' && url.protocol !== 'https:')) {
        return false;
    }

    return !!(url.hostname && url.pathname);
}
