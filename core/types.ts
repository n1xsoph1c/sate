export enum ESateElements {
    p = "p",
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    hr = "hr",
    br = "br",
    img = "img",
    Collapsible = "Collapsible",
    CollapsibleEnd = "CollapsibleEnd",
    CollapsibleContent = "CollapsibleContent"
}

export type TencodedPage = {
    id: number,
    type: ESateElements,
    content?: string | null | TCollapsible
}

export type TCollapsible = {
    id: number,
    heading: string,
    content?: TencodedPage[]
}