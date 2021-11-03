import React from 'react';
import icon from "../../../assets/Images/Categories/pexels-photo-247878.png"
import Image from "next/image";
import Link from "next/link";
import { changeDateFormat, getThumbnailImage } from '../../Shared/Constant/Constant';
 import { orderStatus } from '../../Shared/Constant/Status';


const OrdersItem = ({ orders }) => {
	return (
		<div>
			<div className=" grid  grid-cols-[60%,40%]  xs:grid-cols-[40%,30%,30%]   c-lg:grid-cols-[40%,20%,20%,20%]">
				<p className=" text-lg text-[#000000] text-opacity-40">
					Order history
				</p>
				<p className="hidden c-lg:block text-lg text-[#000000] text-opacity-40 text-center">
					Date
				</p>
				<p className=" text-lg text-[#000000] text-opacity-40 text-center">
					Price
				</p>
				<p className=" hidden xs:block text-lg text-[#000000] text-opacity-40 text-center">
					Current Status
				</p>
			</div>
			<div className=" mt-8">
				{orders?.map((item) => {
					return (
						<Link
							href={`/orders/${item.id}`}
							passHref={true}
						>
							<div className=" grid  grid-cols-[60%,40%] xs:grid-cols-[40%,30%,30%]   c-lg:grid-cols-[40%,20%,20%,20%] items-center bg-white shadow-c-sm rounded-lg mb-3 py-3 cursor-pointer">
								<div className=" flex   items-center ">
									<div className=" w-10 h-10 relative ml-2  sm:ml-8  mr-2 sm:mr-8 rounded-md overflow-hidden">
										<Image
											src={getThumbnailImage(
												item
													.order_details[0]
													.listing
													.images[0]
											)}
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<div>
										<p className=" text-lg font-semibold text-primary">
											{
												item
													.order_details[0]
													.listing
													.title
											}
										</p>

										<p className="  text-sm text-[#77869E] leading-4 flex flex-col mt-1">
											<span>
												#Order
												ID:
												{
													item.id
												}
											</span>
											<span>
												{changeDateFormat(
													item.created_at,
													"DD/MM/YYYY, h:mm a"
												)}
											</span>
										</p>
									</div>
								</div>
								<div className=" hidden c-lg:flex justify-center items-center">
									<p className=" text-sm text[#000000] text-opacity-50 leading-4 text-center">
										{changeDateFormat(
											item.created_at,
											" Do MMM  YY"
										)}
									</p>
								</div>
								<div className="flex justify-center items-center">
									<p className=" text-center text-primary font-semibold text-lg">
										{" "}
										{
											item
												.grand_total
												.formatted
										}
									</p>
								</div>
								<div className="hidden xs:flex justify-center items-center">
									<button className=" px-6 py-1 rounded-lg border border-primary">
										{orderStatus(
											item.order_status
										)}
									</button>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default OrdersItem;