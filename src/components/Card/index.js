import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
} from "./card.styles";

export default function Card({ title, image, annotationPrefix }) {
    return (
        <CardWrapper data-sb-field-path={`${annotationPrefix} .Card`}>
            <CardImage data-sb-field-path='.image' background={image.url} />
            <CardTextWrapper>
                <CardTextTitle data-sb-field-path='.title'>{title}</CardTextTitle>
                <CardTextBody>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                </CardTextBody>
            </CardTextWrapper>
        </CardWrapper>
    );
};
