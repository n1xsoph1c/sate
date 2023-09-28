"use client"
import { FormEvent, useState } from "react";

const ParserClasses = {
  h1: "my-2 text-[30px] uppercase font-extrabold text-main",
  h2: "my-2 text-[20px] uppercase font-bold text-main",
  h3: "my-2 text-[15px] uppercase font-semibold text-main",
  h4: "my-2 text-sm uppercase font-medium text-main",
  hr: "w-full h-1 bg-dark mb-5",
  p: "my-1 text-sm",
  collapsible: "border rounded-md p-2 mt-2",
  collapsibleButton: "cursor-pointer ml-2",
};

enum EncodingTypes {
  p = "p",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  hr = "hr",
  br = "br",
  img = "img",
  Collapsible = "Collapsible",
  CollapsibleEnd = "#>"
}

// Extract collapsible logic into a separate function
function parseCollapsible(htmlLines) {
  const collapsibles = [];
  let currentCollapsible = null;

  for (const tag of htmlLines) {
    if (tag.startsWith("> ")) {
      // Start of a collapsible section
      currentCollapsible = {
        id: collapsibles.length,
        type: "Collapsible",
        content: {
          id: 0,
          heading: tag.replace("> ", ""),
          content: [],
        },
      };
    } else if (tag === "#>") {
      // End of the current collapsible section
      if (currentCollapsible) {
        collapsibles.push(currentCollapsible);
        currentCollapsible = null;
      }
    } else if (tag.startsWith(">> ")) {
      // Content within a collapsible section
      if (currentCollapsible) {
        currentCollapsible.content.content.push({
          id: currentCollapsible.content.content.length,
          type: "p",
          content: tag.replace(">> ", ""),
        });
      }
    }
  }

  return collapsibles;
}

function getEncodingType(tag: string) {
  if (tag.startsWith("> ")) return EncodingTypes.Collapsible
  if (tag.startsWith("#>")) return EncodingTypes.CollapsibleEnd
  if (tag.startsWith("# ")) return EncodingTypes.h1
  if (tag.startsWith("## ")) return EncodingTypes.h2
  if (tag.startsWith("### ")) return EncodingTypes.h3
  if (tag.startsWith("#### ")) return EncodingTypes.h4
  if (tag.startsWith("---")) return EncodingTypes.hr
  if (tag === "") return EncodingTypes.br
  if (tag.startsWith("img=")) return EncodingTypes.img
}

function encodeHTML(html: string) {
  let encodedHTML = []
  let currentCollapsible = null

  html.split("\n").forEach((tag) => {

    if (tag.startsWith("> ")) {
      // Start of a collapsible section
      currentCollapsible = {
        id: encodedHTML.length,
        type: "Collapsible",
        content: {
          id: 0,
          heading: tag.replace("> ", ""),
          content: [],
        },
      };
    } else if (tag === "#>") {
      // End of the current collapsible section
      if (currentCollapsible) {
        encodedHTML.push(currentCollapsible);
        currentCollapsible = null;
      }
    } else if (tag.startsWith(">> ")) {
      // Content within a collapsible section
      if (currentCollapsible) {
        currentCollapsible.content.content.push({
          id: currentCollapsible.content.content.length,
          type: "p",
          content: tag.replace(">> ", ""),
        });
      }
    } else {
      // Regular non-collapsible content
      switch (true) {
        case tag.startsWith("# "):
          encodedHTML.push({ id: encodedHTML.length, type: "h1", content: tag.replace("# ", "") })
          break;

        case tag.startsWith("## "):
          encodedHTML.push({ id: encodedHTML.length, type: "h2", content: tag.replace("## ", "") })
          break;

        case tag.startsWith("### "):
          encodedHTML.push({ id: encodedHTML.length, type: "h3", content: tag.replace("### ", "") })
          break;

        case tag.startsWith("#### "):
          encodedHTML.push({ id: encodedHTML.length, type: "h4", content: tag.replace("#### ", "") })
          break;

        case tag.startsWith("---"):
          encodedHTML.push({ id: encodedHTML.length, type: "hr" })
          break;

        case tag.startsWith("img[") && tag.endsWith("]"):
          const src = tag.replaceAll('img[', '').replaceAll(']', '');
          encodedHTML.push({ id: encodedHTML.length, type: "img", content: src })
          break;

        case (tag === ""):
          encodedHTML.push({ id: encodedHTML.length, type: "br" })
          break;

        default:
          encodedHTML.push({ id: encodedHTML.length, type: "p", content: tag })
          break;
      }
    }

  })

  return encodedHTML
}


function CollapsibleItem({ data }) {
  const [active, setActive] = useState(false)

  return (
    <div className="my-2 py-2">
      <button onClick={(e) => setActive((prev) => !prev)} className="rounded-xl bg-dark hover:bg-slate-200 text-main w-full h-full hover:text-black uppercase text-sm font-bold font-mono text-left py-2 px-5">
        {data.content?.heading}
      </button>
      <div className={`${active ? "block" : "hidden"} mx-10 my-5 `} >
        {data.content.content.map((tag) => {
          return <li key={tag.id} className="font-mono uppercase text-main bg-slate-950"> {tag.content} </li>
        })}
      </div>
    </div>
  )
}

const decodeHTML = (content) => {
  return content.map((tag) => {
    switch (tag.type) {
      case "p":
        return <p key={tag.id} className={`${ParserClasses.p}`}>{tag.content}</p>


      case "h1":
        return <p key={tag.id} className={`${ParserClasses.h1}`}>{tag.content}</p>


      case "h2":
        return <p key={tag.id} className={`${ParserClasses.h2}`}>{tag.content}</p>


      case "h3":
        return <p key={tag.id} className={`${ParserClasses.h3}`}>{tag.content}</p>


      case "h4":
        return <p key={tag.id} className={`${ParserClasses.h4}`}>{tag.content}</p>


      case "hr":
        return <hr key={tag.id} className={`${ParserClasses.hr}`} />


      case "img":
        return (
          <div key={tag.id} className="w-full max-h-[600px] my-5 rounded-[20px] aspect-square ">
            <img className="object-cover w-full h-full rounded-3xl" src={tag.content} alt="" />
          </div>
        )

      case "br":
        return <br key={tag.id} />

      case "Collapsible":
        return <CollapsibleItem data={tag} key={tag.id} />;

      default:
        return null;
    }
  })

}


export default function Home() {
  const [editorContent, setEditorContent] = useState("Enter Text...");
  const [viewerContent, setViewerContent] = useState<any[]>([]);


  const handleContent = (e: FormEvent<HTMLTextAreaElement>) => {
    const parsedHTML = encodeHTML(e.currentTarget.value);
    const decodedHTML = decodeHTML(parsedHTML)
    setViewerContent(decodedHTML);
  };

  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-between px-24 py-10 bg-dark">
      <div className="my-20">
        <h1 className={ParserClasses.h1}> Pager </h1>
        <p className="text-xs uppercase font-bold text-accent tracking-wider"> Author: <span className="text-main"> Rafi Ahmed Saad </span></p>
      </div>
      
      <div className="h-full w-full flex justify-center items-center gap-10">
        <div className="bg-slate-900 rounded-2xl p-5 text-main w-[800px] h-full flex-auto ">
          <textarea
            className="bg-inherit w-full h-full text-slate-500 outline-none"
            onChange={handleContent}
          >
          </textarea>
        </div>
        <div className="bg-slate-800 rounded-2xl p-5 text-main w-full h-full overflow-y-auto flex-initial" id="viewer">
          {viewerContent}
        </div>
      </div>
    </main>
  );
}
