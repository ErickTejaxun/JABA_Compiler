
t0 = h; 	//Posicion actual del h
heap[h] = 72;	//H
 h = h + 1;
heap[h] = 111;	//o
 h = h + 1;
heap[h] = 108;	//l
 h = h + 1;
heap[h] = 97;	//a
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 109;	//m
 h = h + 1;
heap[h] = 117;	//u
 h = h + 1;
heap[h] = 110;	//n
 h = h + 1;
heap[h] = 100;	//d
 h = h + 1;
heap[h] = 111;	//o
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 49;	//1
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 50;	//2
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 51;	//3
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 52;	//4
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 53;	//5
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 64;	//@
 h = h + 1;
heap[h] = 64;	//@
 h = h + 1;
heap[h] = 64;	//@
 h = h + 1;
heap[h] = 64;	//@
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 32;	// 
 h = h + 1;
heap[h] = 115;	//s
 h = h + 1;
heap[h] = 1408491350;	// Fin de cadena
 h = h + 1;
t1 = p + 2; // Simulacion de cambio de ambito
t2 = t1 + 0 ; // Posicion inicio de cadena
t3 = t1 + 1 ; // Posicion flag modo impresion
stack[t3] = 0 ;// Paso por referencia del inicio de cadena
p = p + 2; // Cambio real de ambito
call impresionNativa ;  // Llamando funcion
p = p - 2; // Retomar ambito
$$_clean_scope (t1 , 2 ) ;// Limpiando stack
proc impresionNativa begin
t4= p  + 0 ;
t5= stack[t4];
t6= p + 1 ;
t7= stack[t6];
if (t7== 0 ) goto L0;// Imprimir en modo %c caracter
goto L1;
L1: 
if (t7== 1) goto L2;// Imprimir en modo %e entero
goto L3;
L3: 
if (t7== 2 ) goto L4;// Imprimir en modod %d decimal
goto L5;// Error
L0: 
t8 = heap[t5]; 
if ( t8 != 1408491350 ) goto L6;
goto L7;
L6: 
print( "%c" ,t8 ); 
t5 = t5+ 1; 
goto L0;
L2: 
print( "%e" , t5 ); 
goto L7;
L4: 
print( "%d" , t5 ); 
goto L8;
L5:L6:L7:L8:
t9= 10 ;
print( "%c" , t9 ); 
end
//metodo 3D que concatena 2 cadenas
proc concat begin 
t10=p+1; //cadena1
t11=stack[t10]; //puntero al heap
t12=h; //nueva cadena
L9:
t13=heap[t11]; //extrayendo caracter
if(t13!=1408491350) goto L10;
goto L11;
L10:
heap[h]=t13; //almacenando caracter
h=h+1;
t11=t11+1;
goto L9;
L11:
t14=p+2; //cadena2
t15=stack[t14]; //puntero al heap
L12:
t16=heap[t15]; //extrayendo caracter
if(t16!=1408491350) goto L13;
goto L14;
L13:
heap[h]=t16; //almacenando caracter
h=h+1;
t15=t15+1;
goto L12;
L14:
heap[h]=0;
h=h+1;
t17=p+0; //return del metodo
stack[t17]=t12;
end
