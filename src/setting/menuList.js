const MENU_LIST = [{
	"id": "Main",
	"name": "main",
	"text": "首页",
	"url": "main",
	"children": [{
		"id": "SystemMain",
		"name": "systemMain",
		"text": "系统首页",
		"url": "systemMain",
		"children": [{
			"id": "SystemMain",
			"name": "systemMain",
			"text": "系统首页",
			"url": "systemMain"
		}, {
			"id": "AccountSetting",
			"name": "accountSetting",
			"text": "账户设置",
			"url": "accountSetting"
		}]
	}]
}, {
	"id": "Goods",
	"name": "goods",
	"text": "商品",
	"url": "goods",
	"children": [{
		"id": "GoodsManage",
		"name": "goodsManage",
		"text": "商品管理",
		"url": "goodsManage",
		"children": [{
			"id": "GoodsList",
			"name": "goodsList",
			"text": "商品列表",
			"url": "goodsList"
		}, {
			"id": "GddGoods",
			"name": "addGoods",
			"text": "添加商品",
			"url": "addGoods"
		}, {
			"id": "GatchManage",
			"name": "batchManage",
			"text": "批量管理",
			"url": "batchManage"
		}, {
			"id": "ImageManage",
			"name": "imageManage",
			"text": "图片库管理",
			"url": "imageManage"
		}]
	}, {
		"id": "GoodsConfig",
		"name": "goodsConfig",
		"text": "商品配置",
		"url": "goodsConfig",
		"children": [{
			"id": "GoodsCate",
			"name": "goodsCate",
			"text": "商品分类",
			"url": "goodsCate"
		}, {
			"id": "ProductLabel",
			"name": "productLabel",
			"text": "商品标签",
			"url": "ProductLabel"
		}, {
			"id": "ProductSpeci",
			"name": "productSpeci",
			"text": "商品规格",
			"url": "ProductSpeci"
		}, {
			"id": "BrandManage",
			"name": "brandManage",
			"text": "品牌管理",
			"url": "BrandManage"
		}, {
			"id": "GoodsOrige",
			"name": "goodsOrige",
			"text": "商品来源地",
			"url": "GoodsOrige"
		}, {
			"id": "WareManage",
			"name": "wareManage",
			"text": "所属仓库管理",
			"url": "WareManage"
		}, {
			"id": "HomeManage",
			"name": "homeManage",
			"text": "上门自提管理",
			"url": "HomeManage"
		}, {
			"id": "LogDisManage",
			"name": "logDisManage",
			"text": "物流配送管理",
			"url": "LogDisManage"
		}, {
			"id": "LogComManage",
			"name": "logComManage",
			"text": "物流公司管理",
			"url": "LogComManage"
		}]
	}]
}, {
	"id": "GoodsConfig",
	"name": "goodsConfig",
	"url": "goodsConfig",
	"text": "订单",
	"children": [{
		"id": "GoodsClass",
		"name": "goodsClass",
		"text": "订单管理",
		"url": "goodsClass",
		"childern": [{
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "订单列表",
			"url": "goodsLabel"
		}, {
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "发货订单打印",
			"url": "goodsLabel"
		}, {
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "订单设置",
			"url": "goodsLabel"
		}]
	}, {
		"id": "GoodsLabel",
		"name": "goodsLabel",
		"text": "退货/退款",
		"url": "goodsLabel",
		"children": [{
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "退货申请处理",
			"url": "goodsLabel"
		}, {
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "退款申请处理",
			"url": "goodsLabel"
		}, {
			"id": "GoodsLabel",
			"name": "goodsLabel",
			"text": "退货原因设置",
			"url": "goodsLabel"
		}]
	}]
}, {
	"id": "Permission",
	"name": "permission",
	"text": "权限",
	"url": "permission",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "用户管理",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "商户管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "O2O店铺管理",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "微店店长管理",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "供货商管理",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "角色管理",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "日志查询",
		"url": "orderManage",
		"children": []
	}]
}, {
	"id": "User",
	"name": "user",
	"text": "用户",
	"url": "user",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "用户列表",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "增加会员等级搜索",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "会员等级设置",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "积分设置",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "成长值及积分查询",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "任务奖励设置",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "更多规则设置",
			"url": "orderManage"
		}]
	}]
}, {
	"id": "Marketing",
	"name": "marketing",
	"text": "营销",
	"url": "marketing",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "广告管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "广告列表-轮播图管理",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "添加广告",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "优惠券管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "优惠券列表",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "添加优惠券",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "精选活动管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "活动列表",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "新增活动",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "限时抢购时间段列表",
			"url": "orderManage"
		}]
	}]
}, {
	"id": "Statistics",
	"name": "statistics",
	"text": "统计",
	"url": "statistics",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "会员统计",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "流量统计",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "订单统计",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "订单统计",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "商品数据统计",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "商品数据统计",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "交易统计",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "分销统计",
		"url": "orderManage",
		"children": []
	}]
}, {
	"id": "Finance",
	"name": "finance",
	"text": "财务",
	"url": "finance",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "对账管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "对账列表-海臻",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "供货商",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "O2O",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "微店",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "第三方",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "发票管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "发票列表-原型",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "单据管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "收款单列表-海臻",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "退款单列表-海臻",
			"url": "orderManage"
		}]
	}]
}, {
	"id": "Distribution",
	"name": "distribution",
	"text": "分销",
	"url": "distribution",
	"children": []
}, {
	"id": "Setting",
	"name": "setting",
	"text": "设置",
	"url": "setting",
	"children": [{
		"id": "OrderManage",
		"name": "orderManage",
		"text": "帮助管理",
		"url": "orderManage",
		"children": [{
			"id": "OrderManage",
			"name": "orderManage",
			"text": "帮助列表",
			"url": "orderManage"
		}, {
			"id": "OrderManage",
			"name": "orderManage",
			"text": "分类管理",
			"url": "orderManage"
		}]
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "系统公告",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "关于我们",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "版本设置",
		"url": "orderManage",
		"children": []
	}, {
		"id": "OrderManage",
		"name": "orderManage",
		"text": "反馈信息",
		"url": "orderManage",
		"children": []
	}]
}]

const getSubMenu = function(key) {
	for(let i = 0; i < MENU_LIST.length; i++) {
		if(MENU_LIST[i].id == key) {
			console.log(MENU_LIST[i])
			return MENU_LIST[i];
		}
	}
}

export default {
	getSubMenu,
	MENU_LIST
}