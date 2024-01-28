## DOM Traversal / DSF / BFS




## WHY ?

* DOM lifecycle 
* event propagation
* rendering mechanics
* data progressing
* trees & graphs
* CSS selectors
* recursion
* It's used












## simple iteration vs simple recursion
* memory












## recursion aspect

* occurs when a function calls itself

``` js

f() {
    // ...
    f(); 
    // ...
}

f()

```

* the stack of the caller stays open until all caller stays until all calls are not done yet!

```
|  call 0: f() ------------------------------------------------------>
                    | call 1: f() ----------------------------------->
                         .....
                         .....
                    | return 1:   <----------------------------------
   return 0: <-------------------------------------------------------
 
```



## biggest challenges of recursion is our context
* passing data
* getting the result 
* stopping at the right moment
