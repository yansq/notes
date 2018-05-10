		function csd(a) {
			return new Promise(function(resolve,reject){
				setTimeout(()=>{
					resolve("1111")
				}, 100);
			})
		}
		function* gen() {
			let a = 0;
			yield csd(a);
			yield csd(a);
			yield csd(a);
		}
    
		const co = function (gen) {

		    const g = gen();
		    let csdsb = {};

		    if (Object.prototype.toString.call(g) !== '[object Generator]') {
		        throw new Error('parameter must be a generator function');
		    }
		    let result = (function next(val) {
		        const stage = g.next(val);

		        if (stage.done) {
		            return csdsb.then(function (value) {
					    console.log(value);
					}, function (err) {
					    console.error(err.stack);
					})
		        }
		        if (!!stage.value.then) {
		            stage.value.then(next);
		            csdsb = stage.value
		            console.log(csdsb)
		        } else {
		            stage.value(next);
		        }
		    })();
		   
		};
		co(gen)
