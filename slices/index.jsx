import HeroSection from "@/slices/HeroSection";
import EmbedWithText from "@/slices/EmbedWithText";
import IllustrationCollection from "@/slices/IllustrationCollection";
import TextSection from "@/slices/TextSection";
import ImageWithText from "@/slices/ImageWithText";
import Accordion from "@/slices/Accordion";
import Image from "@/slices/Image";
export { HeroSection };

export const components = {
	hero_section: HeroSection,
	text_section: TextSection,
	embed_with_text: EmbedWithText,
	illustration_collection: IllustrationCollection,
	image_with_text: ImageWithText,
	accordian: Accordion,
	image: Image,
};
