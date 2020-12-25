<script>
document.write("<b>Algo 1</b><br><br>");
document.write("INPUT: [3,4,4,6,1,4,4]<br>");
function solution1(N, A) {
	if ( N<100000 && A.length<100000){
    var counters = new Array (N);
    for(i = 0; i < N; i++) {
     counters[i] = 0;
    }
    var lastMax = 0;
    var Max = 0; 
    var longueur = A.length;
    var i ;
 // this declarations are for optimization
    
    for(j=0; j < longueur; j++){
        if(A[j] <= N){
            i = A[j] - 1;
            if (counters[i] < lastMax) {
            counters[i] = lastMax ;
            }
            counters[i]++;
            if (Max < counters[i]) 
            {
            Max = counters[i];
            }
        } else {
            lastMax = Max;
        }
    }
    
    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }
    
    return counters;
 	}else{
    	return "N or Length of A is out of range";
    }
   
}
document.write("OUTPUT : ");
document.write(solution1(5,[3,4,4,6,1,4,4]))

document.write("<br><br> <b>Algo2</b><br><br>");
document.write("INPUT: A[4,4,5,5,1] / B=[3,2,4,3,1]<br>");

function solution2(A, B) {
	if (A.length < 50000 && B.length < 50000) { 
    var C = new Array(A.length+1);
    C[0] = 1;
    C[1] = 1;
    var MAX = 1<<30;

    for (var i = 2; i < C.length; ++i) {
        C[i] = C[i-1] + C[i-2];
        C[i] = C[i] % MAX;
    }

    var result = new Array(A.length);

    for (var i = 0; i < A.length; ++i) {
        result[i] = C[A[i]] % (1 << B[i]);
    }

    return result;
    }else {
    return "L is out of range";
    }
    
}
document.write("OUTPUT : ");
document.write(solution2([4,4,5,5,1],[3,2,4,3,1]));

document.write("<br><br> <b>Algo3</b><br><br>");

function solution3(A) {
		var N = A.length;
        if (N<20000) {
         var max = 0;
		var result = 0 ;
        for (i = 0; i < N; i++) {
            A[i] = Math.abs(A[i]);
            max = Math.max(A[i], max);
        }
		for (i = 0; i < N; i++) {
            if (A[i]==max){
            result += -A[i]
            }else {
            result +=A[i]
            }
        }
        return result;
        }else {
        return "N is out of range";
        }
       
   }
	document.write("INPUT : [1,5,2,-2] <br>");
    document.write("OUTPUT : ");
   document.write(solution3([1,5,2,-2]));

</script>
