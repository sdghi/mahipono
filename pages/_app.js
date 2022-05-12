import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismic";
import { createClient } from "../prismic";
import Header from "@/components/Header";
import "styles/styles.scss";

export default function App({ Component, pageProps, navigation }) {
	return (
		<PrismicProvider
			linkResolver={linkResolver}
			internalLinkComponent={({ href, children, ...props }) => (
				<Link href={href}>
					<a {...props}>{children}</a>
				</Link>
			)}
		>
			<PrismicPreview repositoryName={repositoryName}>
				<Header navigation={navigation} />
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	);
}

App.getInitialProps = async ({ previewData }) => {
	const client = createClient({ previewData });
	const navigation = await client.getSingle("navigation");
	return { navigation: navigation.data.body };
};
