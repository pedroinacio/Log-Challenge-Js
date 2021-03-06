class Sequence {
	constructor(first,last){
		this._sequence = [];
		this._first = first;
		this._last 	= last;

		for (var i = this._first; i <= this._last; i++) {
			this._sequence.push(i);
		}

		this.applyRulesToSequence();
	}

	getSequence() 
	{
		return this._sequence;
	}

	applyRule1_1(number)
	{
		if(((number%3) == 0))
		{
			return true;
		}else{
			return false;
		}
	}

	applyRule1_2(number)
	{
		if(String(number).indexOf('3') !== -1)
		{
			return true;
		}else{
			return false;
		}
	}

	applyRule2_1(number)
	{
		if((number%5 == 0))
		{
			return true;
		}else{
			return false;
		}		
	}

	applyRule2_2(number)
	{
		if(String(number).indexOf('5') !== -1)
		{
			return true;
		}else{
			return false;
		}
	}

	applyRule3(number)
	{
		if((number%3 == 0) && (number%5 == 0))
		{
			return true;
		}else{
			return false;
		}
	}

	applyRulesToSequence()
	{		
		for (var i = 0; i <= this._sequence.length; i++) {
			if ((this.applyRule1_1(this._sequence[i]) || 
				this.applyRule1_2(this._sequence[i]) || 
				this.applyRule2_1(this._sequence[i]) ||
				this.applyRule2_2(this._sequence[i])) && 
				this.applyRule3(this._sequence[i])) {

				this._sequence[i] = 'lucky';

			}else if (this.applyRule1_1(this._sequence[i]) && this.applyRule1_2(this._sequence[i]) && 
					  this.applyRule2_1(this._sequence[i]) && this.applyRule2_2(this._sequence[i])) {

				this._sequence[i] = 'fizzbuzz';

			}else if (this.applyRule1_1(this._sequence[i]) && this.applyRule1_2(this._sequence[i])) {

				this._sequence[i] = 'fizz fizz';

			}else if (this.applyRule2_1(this._sequence[i]) && this.applyRule2_2(this._sequence[i])) {

				this._sequence[i] = 'buzz buzz';

			}else if (this.applyRule1_1(this._sequence[i]) || this.applyRule1_2(this._sequence[i])) {

				this._sequence[i] = 'fizz';

			}else if (this.applyRule2_1(this._sequence[i]) || this.applyRule2_2(this._sequence[i])) {

				this._sequence[i] = 'buzz';

			}
		}

		document.getElementById("sequence").innerHTML = this._sequence.join(',');
	}
}
