import {
    BannerWrapper,
    BannerTextWrapper,
    BannerTextTitle,
    BannerTextBody,
} from "./banner.styles";

export default function Banner({ title, annotationPrefix }) {
    return (
        <BannerWrapper data-sb-field-path={`${annotationPrefix} .Banner`}>
            <BannerTextWrapper>
                <BannerTextTitle data-sb-field-path='.title'>{title}</BannerTextTitle>
                {/* <BannerTextBody>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                </BannerTextBody> */}
            </BannerTextWrapper>
        </BannerWrapper>
    );
};
