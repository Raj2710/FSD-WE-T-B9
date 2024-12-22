# Summary of Session

1. props 
    - Props are arguments passed to react components. 
    - Props are Read Only
2. props drilling 
    - Props drilling are passing props from Parrent component to Deeply Nested Child component through coponents that don't use the props. 
    - It causes Unwanted re-renders for the component those who don't even use the props themselves.
    - Impact the performance due to too many re-renders
    - It affects the readability of code.
    - props drilling can be resolved by using statemanagement hooks like useContext() or by using State management frameworks like Redux and these will be covered later
3. useState()
    - It helps in handling the state of the application data.
    - If we use normal variable will be updated but DOM will not be updated. Hence in order to update the UI/DOM we need state management. And useState does this job.
    - useState fn will give 2 values
        - stateValue
        - stateFunction
    - stateValue can be updated only with the help of stateFunction
    - Every state update will re-render the components.