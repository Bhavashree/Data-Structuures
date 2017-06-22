#include<string.h>
#include<stdio.h>
#include<stdlib.h>
#include<boolean.h>
struct node{
int data;
int key;
struct node *next;
}
struct node *head=NULL;
struct node *current=NULL;
void printlist()
{
printf("[");
struct node *ptr=head;
while(*ptr!=NULL){
printf("%d,%d",ptr->key,ptr->data);
ptr=ptr->next;
}
printf("]");
} 
void inserfirst(int key,int data)
{
struct node *link= (struct node *)malloc(sizeof(struct node));
link->key=key;
link->data=data;
link->next=head;
head=link;
}
struct node* deletefirst()
{
struct node* templink=head;
head=head->next;
return templink;
}
bool isempty()
return head==NULL;
int length()
{
int length=0;
struct node *current;
for(current=head;current!=NULL;current=current->next)
length++;
return length;
}
struct node * find(int key)
{
struct node * current=head;
if(head==NULL)
{
return NULL;
}
while(current->key!=key)
{
if(current->next==NULL)
return NULL;
else
current=current->next;
}
return current;
}
struct node* delete(int key)
{
struct node* current=head;
struct node* previous=NULL;
if(head==NULL)
return NULL;
while(current->key!=key)
{
if(current->next==null)
{
return NULL;
else
previous=current;
current=current->next;
}
}
if(current==head)
head=head->next;
else
previous->next=current->next
return current;
}
main()
{
insertfirst(1,10);
insertfirst(2,20);
insertfirst(3,30);
insertfirst(4,40);
printf("original list:");
printlist();
while(!=isempty())
{
struct node *temp=deletefirst();
printf(deleted value:);
printf("(%d,%d)",temp->key,temp->data);
}
printf("after deleteing all items,list:");
printlist();
insertfirst(1,10);
insertfirst(2,20);
insertfirst(3,30);
insertfirst(4,40);
insertfirst(5,50);
printf("Restored list:)';
printlist();
struct node* foundlink=find(3);
if(foundlink!=NULL){
printf("element found");
printf("(%d,%d)",foundlink->link,foundlink->data);
}
else
printf("Element not found");
delete(4);
printf("after deleting an element");
printlist();
}
