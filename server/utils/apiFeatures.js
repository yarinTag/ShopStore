class APIFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i' //that will be case insensitive.
            }
        } : {}

        // console.log(keyword);
        this.query = this.query.find({
            ...keyword
        });

        return this;
    }

    filter() {
        const queryCop = {...this.queryStr};

        //removing fields from the query
        const removeFields = ['keyword','page','limit'];
        removeFields.forEach( e => delete queryCop[e]);

        //advance filter for price ,rating etc 
        let queryStr = JSON.stringify(queryCop);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);//less then =lt etc

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultsPerPage) {
        const currentPage = Number(this.queryStr.page) || 1; 
        const skip = resultsPerPage * (currentPage -1);
        
        this.query = this.query.limit(resultsPerPage);
    
    }

}

module.exports = APIFeatures;