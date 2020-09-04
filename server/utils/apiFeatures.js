class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // 1A) Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ['start', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);
    //console.log(queryObj);

    // Apply price range filter if exists
    if (queryObj.price && queryObj.price.includes('-')) {
      if (queryObj.price[0] === '-') {
        queryObj.price = { $lte: `${queryObj.price.replace('-', '')}` };
      } else if (queryObj.price[queryObj.price.length - 1] === '-') {
        queryObj.price = { $gte: `${queryObj.price.replace('-', '')}` };
      } else {
        queryObj.price = {
          $gte: `${queryObj.price.substring(0, queryObj.price.indexOf('-'))}`,
          $lte: `${queryObj.price.substring(
            queryObj.price.indexOf('-') + 1,
            queryObj.price.length
          )}`,
        };
      }
    }

    if (queryObj.name) {
      queryObj.name = { $regex: `^${queryObj.name}`, $options: 'i' };
    }

    if (queryObj.tag === 'all') {
      delete queryObj.tag;
    }

    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace('tag', 'tags');
    //console.log(queryStr);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
      // sort('price name')
    } else {
      // if no sort in query, then we apply sort by create date
      this.query = this.query.sort('createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      // return everything except __v field, use by moongose
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const start = this.queryString.start * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (start - 1) * limit;

    // page=2&limit=10, 1-10, page 1, 11-20, page 2 ...
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default APIFeatures;
