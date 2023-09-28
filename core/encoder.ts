import { TencodedPage, TCollapsible, EPagerElements } from './types';

export class Encoder {

    private encodedLIST: TencodedPage[] = []
    private recentCollapsible: { open: boolean, collapsible?: TCollapsible | null } = {
        open: false,
    }

    private getElementType(tag: string) {
        if (tag.startsWith("> ")) return EPagerElements.Collapsible
        if (tag.startsWith(">> ")) return EPagerElements.CollapsibleContent
        if (tag.startsWith("#>")) return EPagerElements.CollapsibleEnd
        if (tag.startsWith("# ")) return EPagerElements.h1
        if (tag.startsWith("## ")) return EPagerElements.h2
        if (tag.startsWith("### ")) return EPagerElements.h3
        if (tag.startsWith("#### ")) return EPagerElements.h4
        if (tag.startsWith("---")) return EPagerElements.hr
        if (tag === "") return EPagerElements.br
        if (tag.startsWith("img[")) return EPagerElements.img

        return EPagerElements.p
    }

    private getContentFromElement(tag: string, elementType: EPagerElements) {
        switch (elementType) {
            case EPagerElements.p:
                return tag.trim()

            case EPagerElements.h1:
                return tag.replace("# ", "").trim()

            case EPagerElements.h2:
                return tag.replace("## ", "").trim()

            case EPagerElements.h3:
                return tag.replace("### ", "").trim()

            case EPagerElements.h4:
                return tag.replace("#### ", "").trim()

            case EPagerElements.hr:
                return tag.replace("---", "")

            case EPagerElements.br:
                return ""

            case EPagerElements.img:
                return tag.replace("img[", "").replace("]", "").trim()

            case EPagerElements.Collapsible:
                return this.handleCollapsible(tag)

            case EPagerElements.CollapsibleContent:
                return this.handleCollapsible(tag)

            case EPagerElements.CollapsibleEnd:
                return this.handleCollapsible(tag)

            default:
                return null
        }
    }

    private handleCollapsible(tag: string) {
        const collapsibleType = this.getElementType(tag)

        if (collapsibleType === EPagerElements.Collapsible) {
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

        if (collapsibleType === EPagerElements.CollapsibleContent) {
            // Check if collapsible closed 
            if (!this.recentCollapsible.open) return this.getContentFromElement(tag, EPagerElements.p)

            this.recentCollapsible.collapsible.content.push({
                id: this.encodedLIST.length,
                type: EPagerElements.p,
                content: this.getContentFromElement(tag.replace(">>", ""), EPagerElements.p),
            })

            return null
        }

        if (collapsibleType === EPagerElements.CollapsibleEnd) {
            if (!this.recentCollapsible.open) return null

            this.recentCollapsible.open = false
            this.recentCollapsible.collapsible = null
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




