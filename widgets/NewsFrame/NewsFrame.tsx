import { Flex, Col } from "@/shared/flex";
import { NewsBox1, NewsBox2 } from "@/shared/newsBox";

export default function NewsFrame() {
    return (
        <Flex flexDirection="col" gap="16px">
            {[...Array(100)].map((_, index) => (
                <Col key={index} gap="16px">
                    <NewsBox1 />
                    <NewsBox2 />
                    <NewsBox1 />
                </Col>
            ))}
        </Flex>
    );
}