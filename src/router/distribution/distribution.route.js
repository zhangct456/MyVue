import menuList from "@/setting/menuList"
import {createRouter} from "@/utils/createRouter"

let subMenu = menuList.getSubMenu('Distribution')

let subRouter = {}

createRouter(subMenu, subRouter)

export const DistributionRouter = subRouter;
