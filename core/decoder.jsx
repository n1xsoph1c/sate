import React, { useState } from "react";
import { ESateElements, } from "./types";


const Collapsible = ({ heading, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleCollapsible}>
                {isOpen ? "▼" : "►"} {heading}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    );
};


class Decoder {
    constructor() {
        this.elementStyles = {
            h1: "my-2 text-[30px] uppercase font-extrabold text-main",
            h2: "my-2 text-[20px] uppercase font-bold text-main",
            h3: "my-2 text-[15px] uppercase font-semibold text-main",
            h4: "my-2 text-sm uppercase font-medium text-main",
            hr: "w-1/2 h-1 bg-dark mb-5 mx-0",
            p: "my-1 text-sm",
            collapsible: "border rounded-md p-2 mt-2",
            collapsibleButton: "cursor-pointer ml-2",
        };
    }

    createElement(type, content, key) {
        switch (type) {
            case ESateElements.p:
                return <p className={this.elementStyles.p} key={key}> {content} </p>;

            case ESateElements.h1:
                return <h1 className={this.elementStyles.h1} key={key}> {content} </h1>;

            case ESateElements.h2:
                return <h2 className={this.elementStyles.h2} key={key}> {content} </h2>;

            case ESateElements.h3:
                return <h3 className={this.elementStyles.h3} key={key}> {content} </h3>;

            case ESateElements.h4:
                return <h4 className={this.elementStyles.h4} key={key}> {content} </h4>;

            case ESateElements.hr:
                return <hr className={this.elementStyles.hr} />;

            case ESateElements.br:
                return <br key={key} />;

            case ESateElements.img:
                return (
                    <div key={key} className='w-full aspect-square rounded-2xl' >
                        <img src={content} alt="" className='w-full h-full object-cover rounded-2xl' />
                    </div>
                );

            case ESateElements.Collapsible:
                const collapsibleContent = content;
                return (
                    <Collapsible
                        key={key}
                        heading={collapsibleContent.heading || ''}
                    >
                        {collapsibleContent.content.map((item) => {
                            return React.createElement(item.type, { key: item.id }, item.content.toString());
                        })}
                    </Collapsible>
                );

            default:
                break;
        }
    }

    decodeToJSX(data) {
        return (
            <div className="w-full h-full p-10">
                {data.map((item) => {
                    return this.createElement(item.type, item.content, item.id);
                })}
            </div>
        );
    }
}

export default Decoder;