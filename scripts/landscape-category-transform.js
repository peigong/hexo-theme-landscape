/**
 * @fileoverview
 */

const createLandscapeCategoryTransform = (map) => {
    map = map || {}
    /**
     * 
     * @param { String } name 文章类别名称
     */
    return (name) => {
        const cat = map[name] || {}
        return cat.title || name
    }
}

hexo.extend.helper.register('createLandscapeCategoryTransform', createLandscapeCategoryTransform)