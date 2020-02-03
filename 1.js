<script type="text/javascript">
		function submitAnswer(){
	var total=5;
	var score=0;

	//input..
    var q1=document.forms["quiz"]['q1'].value;
    var q2=document.forms["quiz"]['q2'].value;
    var q3=document.forms["quiz"]['q3'].value;
    var q4=document.forms["quiz"]['q4'].value;
    var q5=document.forms["quiz"]['q5'].value;

    //validation 
    // if (q1==null || q1=="")
    //  {
    //  	alert("you miss q1");
    //  	return false
    //  }
    for( i=1; i<=total; i++){
    	if(eval('q'+i)==null || eval('q'+i)=="")
    		alert("you missed question number:"+i);
    }

    // correct answer
     var Ans=['a','b','a','b','a']
    for( i=1; i<=total; i++){
    	if (eval('q'+i)==Ans[i-1]) {
    		score++;
    	}
    }

    // display result..
    var results=document.getElementById('results');
    results.innerHTML="<h3>your correct answer are <span>"+ score +"</span>out of <span>"+ total +"</span></h3>";
    return false;
}
	</script>