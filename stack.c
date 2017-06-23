#include<stdio.h>
int MAXSIZE=8;
int stack[8];
int top=-1;
int isempty()
{
if(top==-1)
return 1;
else
return 0;
}
int isfull()
{
if(top==MAXSIZE)
return 1;
else
return 0;
}
int peek()
return stack[top];
int pop(){
int data;
if(top==-1)
printf("could not pop");
e lse
{
data=stack[top];
top=top-1;
return data;
}
int push(int data)
{
if(!isfull()){
top=top+1;
stack[top]=data
}
else
printf("could not insert data")
}
int main()
{
push(3);
push(4);
push(5);
printf("element at the top:%d\n",peek());
while(!isempty())
{
int data=pop();
printf("%d\n",data);
}
printf("stack full:%s\n",isfull()?"true":"false");
printf("stack empty:%s\n",isempty()?"true":"false");
return 0;
}
