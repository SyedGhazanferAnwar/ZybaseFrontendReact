var fetchRetry = (url, delay, limit, fetchOptions = {}) => {
    const later = delay =>
      new Promise(resolve=>setTimeout(resolve,delay));
    const recur = (timesTried,err) =>
      (timesTried>=limit)
        ? Promise.reject(err)
        : fetch(url, fetchOptions)
          .catch(
            err=>
              later(delay).then(
                ()=>recur(timesTried+1,err)
              )
          ).then(res => {
            console.log(res);
            return res.text();
          })
          .then(res => {
            console.log(res);
            if(res==="connected");
            this.setState({data:[]});
            this.setState({prompt:true});
          });;
    return recur(0);
  }