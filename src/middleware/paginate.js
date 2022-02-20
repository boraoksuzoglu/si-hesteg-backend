Array.prototype.paginate = function (page = 1, limit = this.length) {

    page--
    limit = Number(limit)
    if (this.slice(page * limit, page * limit + limit).length > 0 || this.length > 0) return this.slice(page * limit, page * limit + limit)
    else return {
        error: "not found." 
    }
}

exports.Array