import { Container } from "./styles.js";

export function ButtonText({ title, isActive = false, ...rest }) {
    return (
        <Container title="button" $isactive={isActive.toString()} {...rest}>
            {title}
        </Container>
    );
}
