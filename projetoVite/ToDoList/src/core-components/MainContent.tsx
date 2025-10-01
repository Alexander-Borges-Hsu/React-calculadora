import { Outlet } from "react-router";
import Container from "../components/container/Container";
import { cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main">{}

export default function MainContent({
    className,
    ...props
}: MainContentProps){
    return(
        <Container className={cx("mt-4 md:mt-8", className)}>
            <main  {...props}>
                <Outlet />
            </main>
        </Container>
    )
}