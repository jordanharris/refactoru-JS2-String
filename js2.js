var word = prompt("Enter any word!");
			var characters = word.length;
			var char3 = word.charAt(2);
			var lower = word.toLowerCase();
			var upper = word.toUpperCase();
			var sent = "I have wanted a(n) "+word+" since i was a little boy.";
			var subword = word.substring(1,4);
			alert(
			"You entered: "+word+"."+
			"\nThere are "+characters+" characters in "+word+"."+
			"\nThe third character is "+char3+
			"\nLowercase: "+lower+
			"\nUppercase: "+upper+
			"\nExample: I have wanted a "+word+ " since I was a little boy."+
			"\nSubword: "+subword+".");