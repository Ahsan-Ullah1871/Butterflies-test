import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../components/layouts/MainLayouts/MainLayout";
import HomePageLayout from "../components/layouts/PageLayouts/HomePageLayout";
import { refreshPage } from "../store/feature/authSlice";
import tradly from "tradly";

const Index = (props) => {
	console.log("====================================");
	console.log(props);
	console.log("====================================");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			refreshPage({ key: localStorage.getItem("refresh_key") })
		);
	}, [dispatch]);

	const pageTitle = props?.seo_text?.meta_title;
	const pageDescription = props?.seo_text?.meta_description;

	return (
		<MainLayout
			pageTitle={pageTitle}
			pageDescription={pageDescription}
		>
			<HomePageLayout />
		</MainLayout>
	);
};

export default Index;

export async function getServerSideProps(context) {
	const response = await tradly.app.getConfigList({
		paramBody: "seo",
	});
	return {
		props: { seo_text: response?.data?.configs  },
	};
}