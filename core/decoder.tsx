import React, { ReactNode } from "react";
import { EPagerElements, TCollapsible, TencodedPage,  } from "./types";

function Collapsible({ heading, children }: { heading: string; children: ReactNode }): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '▼' : '►'} {heading}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    );
}


export class Decoder {
    private elementStyles = {
        h1: "my-2 text-[30px] uppercase font-extrabold text-main",
        h2: "my-2 text-[20px] uppercase font-bold text-main",
        h3: "my-2 text-[15px] uppercase font-semibold text-main",
        h4: "my-2 text-sm uppercase font-medium text-main",
        hr: "w-1/2 h-1 bg-dark mb-5 mx-0",
        p: "my-1 text-sm",
        collapsible: "border rounded-md p-2 mt-2",
      
      
      
        collapsibleButton: "cursor-pointer ml-2",
    }

    private createElement(type, content, key?) {
        switch (type) {
            case EPagerElements.p:
                return <p className={this.elementStyles.p} key={key}> {content} </p>

            case EPagerElements.h1:
                return <h1 className={this.elementStyles.h1} key={key}> {content} </h1>

            case EPagerElements.h2:
                return <h2 className={this.elementStyles.h2} key={key}> {content} </h2>

            case EPagerElements.h3:
                return <h3 className={this.elementStyles.h3} key={key}> {content} </h3>

            case EPagerElements.h4:
                return <h4 className={this.elementStyles.h4} key={key}> {content} </h4>

            case EPagerElements.hr:
                return <hr className={this.elementStyles.hr} />

            case EPagerElements.br:
                return <br key={key} />

            case EPagerElements.img:
                return (
                    <div key={key} className='w-full aspect-square rounded-2xl' >
                        <img src={content} alt="" className='w-full h-full object-cover rounded-2xl' />
                    </div>
                )

            case EPagerElements.Collapsible:
                const collapsibleContent = content as TCollapsible
                return (
                    <Collapsible
                        key={key}
                        heading={collapsibleContent.heading || ''}
                    >
                        {collapsibleContent.content.map((item) => {
                            return React.createElement(item.type, { key: item.id }, item.content.toString())
                        })}
                    </Collapsible>
                );

            default:
                break;
        }
    }


    decodeToJSX(data: TencodedPage[]): ReactNode {
        return (
            <div className="w-full h-full p-10">
                {data.map((item) => {
                    return this.createElement(item.type, item.content, item.id)
                })}
            </div>
        )
    }
}