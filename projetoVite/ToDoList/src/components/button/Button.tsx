import { cva, type VariantProps} from "class-variance-authority";
import type typeIcon from "../icon/Icon";
import Icon from "../icon/Icon";
import Text from "../text/Text";

// Função cva para caso venha a ter novos estilos pro botão.
export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2", {
    variants: {
        variant:{
            primary: "bg-gray-200 hover:bg-pink-light"
        },
        size:{
            md: "h-14 py-4 px-5"
        },
        disabled:{
            true: "opacity-50 pointer-events-none"
        },
        handling:{
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
        handling: false
    }
});

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-pink-base"
        },
        size: {
            md: "w-5h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});

interface ButtonProps extends Omit<React.ComponentProps<"button">, 'size' | 'disabled'>, VariantProps<typeof buttonVariants>{
    children ?: React.ReactNode;
    icon ?: React.ComponentProps<typeof typeIcon>["variantIcon"];
    handling?: boolean;
}

export default function Button({
    variant, size, 
    disabled, children, 
    className, icon,
    handling, ...props
}: ButtonProps){
    return(
        <button className={buttonVariants({variant, size, disabled, handling, className})} {...props}>
            {icon && <Icon variantIcon={handling ? "Spinner" : icon} className={buttonIconVariants({variant, size})}/>} 
            {children && <Text variant={"body-md-bold"}>{children}</Text>}
        </button>
    ) 
}