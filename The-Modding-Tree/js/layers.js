addLayer("a", {
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "yellow",
    resource: "achievement power",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            image: "discord.png",
            name: "獲得一個能量!",
            done() { return player.e.points.gte(1) }, // This one is a freebie
            goalTooltip: "萬物之基礎", // Shows when achievement is not completed
            doneTooltip: "萬物之基礎", // Showed when the achievement is completed
        },
        12: {
            name: "不可能！！！",
            done() { return false },
            goalTooltip: "這是啥啊？？？", // Shows when achievement is not completed
            doneTooltip: "你作弊了！！！", // Showed when the achievement is completed
            textStyle: { 'color': '#04e050' },
        },
        13: {
            name: "一大步！",
            name: "獲得一百億個能量!",
            done() { return player.e.points.gte(10000000000) },
            tooltip: "沒有！", // Showed when the achievement is completed
            onComplete() { console.log("？？？") }
        },
    },
},
)
addLayer("e", {
    name: "能量", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#FFFF00",
    upgrades: {
        11: {
            title: "開始",
            description: "增加1光每秒獲得",
            cost: new Decimal(1),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "你的第一步！",
        },
        12: {
            title: "加成",
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
            description: "能量加成光的獲得的速度",
            cost: new Decimal(3),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "加速！！！",
        },
        13: {
            title: "乘數",
            effect() {
                return player[this.layer].points.add(1).pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
            description: "能量加成更加多光的獲得的速度",
            cost: new Decimal(20),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "一飛衝天！",
        },
        14: {
            title: "二次方",
            effect() {
                return player[this.layer].points.pow(0.6)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
            description: "能量加成更多光的獲得的速度",
            cost: new Decimal(50),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "購買火箭！",
        },
        15: {
            title: "三次方",
            effect() {
                return player[this.layer].points.pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
            description: "更據能量增加一點點的點數獲得速度",
            cost: new Decimal(300),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "購買大火箭！",
        },
        16: {
            title: "迭代幂次",
            effect() {
                return player[this.layer].points.pow(1.3).pow(1.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
            description: "更據能量增加超级多點數獲得速度",
            cost: new Decimal(400),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            tooltip: "飛向宇宙！",
        }

    },
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "能量", // Name of prestige currency
    baseResource: "光", // Name of resource prestige is based on
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        { key: "e", description: "E: Reset for energy points", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true }
}),
    addLayer("l", {
        name: "電量", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() {
            return {
                unlocked: true,
                points: new Decimal(0),
            }
        },
        color: "#FFFFFF",
        upgrades: {
            11: {
                title: "重新开始",
                description: "增加100光每秒獲得",
                cost: new Decimal(100),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "你的第一步！",
            },
            12: {
                title: "有点熟悉啊",
                effect() {
                    return player[this.layer].points.add(1).pow(0.9)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成光的獲得的速度",
                cost: new Decimal(300),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "加速！！！",
            },
            13: {
                title: "其实就是改数字麻",
                effect() {
                    return player[this.layer].points.add(1).pow(1.002)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成更加多光的獲得的速度",
                cost: new Decimal(2000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "一飛衝天！",
            },
            14: {
                title: "想不出来了啦",
                effect() {
                    return player[this.layer].points.pow(0.6)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成更多光的獲得的速度",
                cost: new Decimal(5000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "購買火箭！",
            },
            15: {
                title: "还差亿点",
                effect() {
                    return player[this.layer].points.pow(0.1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "更據電量增加一點點的點數獲得速度",
                cost: new Decimal(30000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "購買大火箭！",
            },
            16: {
                title: "最后一步",
                effect() {
                    return player[this.layer].points.pow(1.3).pow(1.4)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "更據能量增加超级多點數獲得速度",
                cost: new Decimal(40000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "飛向宇宙！",
            }

        },
        requires: new Decimal(100), // Can be a function that takes requirement increases into account
        resource: "電量", // Name of prestige currency
        baseResource: "能量", // Name of resource prestige is based on
        baseAmount() { return player.e.points }, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.4, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 1, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            { key: "l", description: "L: Reset for lighting points", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
        ],
        layerShown() { return true }
    }),
    addLayer("m", {
        name: "磁力", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() {
            return {
                unlocked: true,
                points: new Decimal(0),
            }
        },
        color: "#0000FF",
        upgrades: {
            11: {
                title: "开      始",
                description: "增加10000光每秒獲得",
                cost: new Decimal(10000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "你的第一步！",
            },
            12: {
                title: "这次没有",
                effect() {
                    return player[this.layer].points.add(1).pow(0.9)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成光的獲得的速度",
                cost: new Decimal(30000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "加速！！！",
            },
            13: {
                title: "别看我啊",
                effect() {
                    return player[this.layer].points.add(1).pow(1.002)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成更加多光的獲得的速度",
                cost: new Decimal(200000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "一飛衝天！",
            },
            14: {
                title: "快没了",
                effect() {
                    return player[this.layer].points.pow(0.6)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "電量加成更多光的獲得的速度",
                cost: new Decimal(500000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "購買火箭！",
            },
            15: {
                title: "好像没啥用",
                effect() {
                    return player[this.layer].points.pow(0.1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "跟据磁力增加一點點的點數獲得速度",
                cost: new Decimal(3000000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "購買大火箭！",
            },
            16: {
                title: "迭代幂次3.0",
                effect() {
                    return player[this.layer].points.pow(1.5).pow(1.6)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x" }, // Add formatting to the effect
                description: "更據能量增加超级多點數獲得速度",
                cost: new Decimal(4000000),
                unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
                tooltip: "飛向宇宙！",
            }

        },
        requires: new Decimal(1000000), // Can be a function that takes requirement increases into account
        resource: "磁力", // Name of prestige currency
        baseResource: "能量" && "電量", // Name of resource prestige is based on
        baseAmount() { return player.e.points && player.l.points }, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.4, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 2, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            { key: "l", description: "L: Reset for lighting points", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
        ],
        layerShown() { return true }
    })
