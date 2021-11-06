import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelector } from "../../../store/feature/authSlice";
import { get_orders } from "../../../store/feature/orderSlice";
import { options } from "../../Shared/Constant/Status";

const OrdersFilter = () => {
	const dispatch = useDispatch();
	const { auth_key } = useSelector(authSelector);
	const router = useRouter();
	const changeFilter = (e) => {
		const separate = e.target.value.split("-")
 		if (separate[0] === "0") {
			dispatch(
				get_orders({
					authKey: auth_key,
					bodyParam: {
						page: 1,
					},
				})

				);
				router.push({
					pathname: "/orders",
				});
		} else {
			dispatch(
				get_orders({
					authKey: auth_key,
					bodyParam: {
						page: 1,
						order_status: separate[0],
					},
				})
			);
			router.push({
				pathname: "/orders",
				query: { status: separate[1] },
			});
		}
	};
	return (
		<div>
			<label class="flex justify-center items-center ">
				<span class="text-[#77869E]   text-sm sm:text-lg mr-4">
					Filter by :
				</span>
				<select
					onChange={(e) =>
						changeFilter(e)
					}
					class="
                    block
                      w-[150px] sm:w-[250px]
                    mt-1
                    rounded-lg
                    bg-white
                    border-transparent
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
				>
					{options?.map((item) => {
						return (
							<option
								value={`${item.id}-${item.value}`}
							>
								{item.label}
							</option>
						);
					})}
				</select>
			</label>
		</div>
	);
};

export default OrdersFilter;