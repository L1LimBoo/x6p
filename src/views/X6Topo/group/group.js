//group的总体配置

//限制子节点位置
export function setGroupTranslating() {
    return {
        restrict(view) {
            const cell = view.cell;
            if (cell.isNode()) {
                const parent = cell.getParent();
                if (parent) {
                    return parent.getBBox();
                }
            }
        },
    }
}