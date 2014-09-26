
function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function(str) { 
  return str ? '('+str.slice(0, str.length-1)+')' : '()';
};
EmptyList.prototype.isEmpty = function() { return true; };
EmptyList.prototype.length = function(val) { return val || 0; };
EmptyList.prototype.push = function(x) { return new ListNode(x, this);};
EmptyList.prototype.remove = function(x) { return this; };
EmptyList.prototype.append = function(xs) { console.log('append is noop');};

function ListNode(value, next) { 
  this.value = value;
  this.next = next;
}
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { return false; };

ListNode.prototype.toString = function(str) { 
  str = str || '';
  str = str + this.value + ' ';
  return this.next.toString( str );
};

ListNode.prototype.head = function() { return this.value; };
ListNode.prototype.tail = function() { return this.next;  };
ListNode.prototype.length = function(val) { 
  val = val || 0;
  return this.next.length(val+1);
};

ListNode.prototype.push = function(x) { 
  return new ListNode(x, this);
};

ListNode.prototype.remove = function(x) {
  var tail = this.next.remove(x);
  if ( this.value === x ) return tail;
  if (this.next === tail) return this;
  return new ListNode(this.value, tail);

};

ListNode.prototype.append = function(xs) { 
  if (this.next instanceof EmptyList) 
    return new ListNode(this.value, xs);
  return new ListNode(this.value, this.next.append(xs));
};

module.exports.List = List;
module.exports.ListNode = ListNode;
module.exports.EmptyList = EmptyList;
