import { cva, type VariantProps } from "class-variance-authority";
import TrashIcon from "../../assets/icons/Trash-Regular.svg?react";
import Xregular from "../../assets/icons/X-Regular.svg?react";
import Spinner from "../../assets/icons/spinner.svg?react";
import Plus from "../../assets/icons/Plus-Regular.svg?react";
import Pencil from "../../assets/icons/PencilSimple-Regular.svg?react";
import Check from "../../assets/icons/Check-Regular.svg?react";
import React from "react";

export const iconVariants = cva("", {
    variants: {
        variant: {
            "none": " ",
            "icon-sm": "fill-green-dark w-10 h-10",
            "icon-md": "fill-pink-light w-10 h-10",
            "icon-md-bold": "fill-gray-400 w-10 h-10"
        }
    },
    defaultVariants:{
        variant: "none"
    }
});

export const iconSymbol ={
    variant: {
        "Trash": TrashIcon,
        "Xregular": Xregular,
        "Spinner": Spinner,
        "Plus": Plus,
        "Pencil": Pencil,
        "Check": Check
        }
};

interface IconProps extends VariantProps<typeof iconVariants>{
    className?: string;
    variantIcon?: keyof typeof iconSymbol.variant;
    children?: React.ReactNode;
    animacao?: string;
}

export default function Icon({children, variantIcon = "Trash", variant, className, ...props}: IconProps){
    const iconElement = iconSymbol.variant[variantIcon];
    const condicaoAnima = variantIcon === "Spinner" ? "animate-spin" : "";

    return(
        React.createElement(
            iconElement,
            {
                className: `${iconVariants({variant})} ${className ?? ""} ${condicaoAnima}`,
                ...props
            },
            children
        )
    )
}