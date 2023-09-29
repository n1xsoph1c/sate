import { TencodedPage, TCollapsible, ESateElements } from './types';

export class Encoder {

    private encodedLIST: TencodedPage[] = []
    private recentCollapsible: { open: boolean, collapsible?: TCollapsible | null } = {
        open: false,
    }

    private getElementType(tag: string) {
        if (tag.startsWith("> ")) return ESateElements.Collapsible
        if (tag.startsWith(">> ")) return ESateElements.CollapsibleContent
        if (tag.startsWith("#>")) return ESateElements.CollapsibleEnd
        if (tag.startsWith("# ")) return ESateElements.h1
        if (tag.startsWith("## ")) return ESateElements.h2
        if (tag.startsWith("### ")) return ESateElements.h3
        if (tag.startsWith("#### ")) return ESateElements.h4
        if (tag.startsWith("---")) return ESateElements.hr
        if (tag === "") return ESateElements.br
        if (tag.startsWith("img[")) return ESateElements.img

        return ESateElements.p
    }

    private getContentFromElement(tag: string, elementType: ESateElements) {
        switch (elementType) {
            case ESateElements.p:
                return tag.trim()

            case ESateElements.h1:
                return tag.replace("# ", "").trim()

            case ESateElements.h2:
                return tag.replace("## ", "").trim()

            case ESateElements.h3:
                return tag.replace("### ", "").trim()

            case ESateElements.h4:
                return tag.replace("#### ", "").trim()

            case ESateElements.hr:
                return tag.replace("---", "")

            case ESateElements.br:
                return ""

            case ESateElements.img:
                return tag.replace("img[", "").replace("]", "").trim()

            case ESateElements.Collapsible:
                return this.handleCollapsible(tag)

            case ESateElements.CollapsibleContent:
                return this.handleCollapsible(tag)

            case ESateElements.CollapsibleEnd:
                return this.handleCollapsible(tag)

            default:
                return null
        }
    }

    private handleCollapsible(tag: string) {
        const collapsibleType = this.getElementType(tag)

        if (collapsibleType === ESateElements.Collapsible) {
            // Check if collapsible Already open
            if (this.recentCollapsible.open) return null

            // Start the collapsible 
            this.recentCollapsible = {
                open: true,
                collapsible: {
                    id: this.encodedLIST.length,
                    heading: tag.replace("> ", ""),
                    content: []
                }
            }

            return this.recentCollapsible.collapsible
        }

        if (collapsibleType === ESateElements.CollapsibleContent) {
            // Check if collapsible closed 
            if (!this.recentCollapsible.open) return this.getContentFromElement(tag, ESateElements.p)

            this.recentCollapsible.collapsible?.content?.push({
                id: this.encodedLIST.length,
                type: ESateElements.p,
                content: this.getContentFromElement(tag.replace(">>", ""), ESateElements.p),
            })

            return null
        }

        if (collapsibleType === ESateElements.CollapsibleEnd) {
            if (!this.recentCollapsible.open) return null

            this.recentCollapsible.open = false
            this.recentCollapsible.collapsible = null
            return null
        }
    }

    encodeTEXT(text: string) {
        text.split("\n").forEach((tag) => {
            let elementType = this.getElementType(tag)
            let newElement = {
                id: this.encodedLIST.length,
                type: elementType,
                content: this.getContentFromElement(tag, elementType)
            }

            if (newElement.content != null) this.encodedLIST.push(newElement)
        })

        return this.encodedLIST
    }
}




