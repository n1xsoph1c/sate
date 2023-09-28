# Pager Project Documentation

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Decoder](#decoder)
- [Encoder](#encoder)
- [Pager](#pager)
- [Types](#types)

## Introduction

The Pager project is a TypeScript-based utility for encoding and decoding text content into a structured format, allowing easy rendering of content in React applications. This documentation provides an overview of the project's structure and its core components.

## Project Structure

The Pager project is structured as follows:

pager/
|── core/
│ ├── decoder.tsx
│ ├── encoder.ts
│ ├── pager.ts
│ ├── types.ts
├── node_modules/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── tsconfig.json
├── LICENSE
├── index.ts


- **core/**: Contains the core functionality of the Pager project.
- **node_modules/**: Node.js modules required for the project.
- **package.json**: Configuration file for Node.js packages used in the project.
- **postcss.config.js**: Configuration file for PostCSS, a CSS post-processor.
- **tailwind.config.js**: Configuration file for Tailwind CSS, a utility-first CSS framework.
- **README.md**: This documentation file.
- **tsconfig.json**: TypeScript configuration file.
- **LICENSE**: License information for the project.
- **index.ts**: The entry point of the project.

## Decoder

The `Decoder` class in `decoder.tsx` is responsible for converting encoded data into React JSX elements. It provides the following functionalities:

- Decodes encoded data into JSX elements.
- Supports various element types such as paragraphs, headings, images, collapsible sections, and more.
- Provides a `Collapsible` component for creating collapsible sections.

## Encoder

The `Encoder` class in `encoder.ts` is responsible for encoding text content into a structured format. It provides the following functionalities:

- Encodes text content into a structured format suitable for rendering.
- Supports various element types and structures, including collapsible sections.
- Transforms text tags into structured data.

## Pager

The `Pager` class in `pager.ts` acts as a central interface for encoding and decoding content. It utilizes the `Encoder` and `Decoder` classes to provide a simple API for encoding and decoding text content.

- `encode(text: string)`: Encodes text content and returns the structured data.
- `decode(data: TencodedPage[])`: Decodes structured data into React JSX elements.

## Types

The `types.ts` file defines TypeScript types and enums used throughout the project. Here are some important types and enums:

- `EPagerElements`: Enum defining various element types such as paragraphs, headings, collapsible sections, and more.
- `TencodedPage`: Type representing encoded content elements with an ID, type, and optional content.
- `TCollapsible`: Type representing a collapsible section with a heading and optional content.

This documentation provides an overview of the Pager project's structure and core components. For more detailed information, please refer to the source code and comments in the respective files.
