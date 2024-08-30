/**
 * @fileoverview
 */

/**
 * 
 * @param { Model<CategorySchema> } categories 文章类别列表
 */
const landscapeCategoryPrepare = (categories, map) => {
    map = map || {}
    categories.forEach(it => {
        const ext = map[it.name] || {}
        Object.assign(it, ext)
    })
    return categories
}

hexo.extend.helper.register('landscapeCategoryPrepare', landscapeCategoryPrepare)