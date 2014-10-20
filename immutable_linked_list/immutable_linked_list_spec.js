var List = require('./immutable_linked_list.js').List;
var ListNode = require('./immutable_linked_list.js').ListNode;
var EmptyList = require('./immutable_linked_list.js').EmptyList;
var expect  = require('chai').expect;

describe('Immutable LinkedList', function(){
  var mt, l1, l2, l3, l4;
  beforeEach(function(){
    mt = new EmptyList();
    l1 = mt.push('c').push('b').push('a');
    l2 = l1.append(l1);
    l3 = l1.remove('b');
    l4 = l2.remove('b');
  });

  describe('Simple Tests', function(){
    it('empty list should be empty', function(){
      expect(mt.isEmpty()).to.equal(true);
    });

    it('non-empty string should not be empty', function(){
      expect(l1.isEmpty()).to.equal(false);
    });

    it('toString on empty string should be "()"', function(){
      expect(mt.toString()).to.equal('()');
    });

    it('should return printed string for non-empty list', function(){
      expect(l3.toString()).to.equal('(a c)');
    });

    it('should return printed string for non-empty list', function(){
      expect(l1.toString()).to.equal('(a b c)');
    });
    

    it('empty list should have length 0', function(){
      expect(mt.length()).to.equal(0);
    });

    it('non-empty list should return correct count', function(){
      expect(l1.length()).to.equal(3);
    });
  });

  describe('Shared Structure', function(){

    it('expect nodes to be shared correctly', function(){
      expect(l2.tail().tail().tail()).to.equal(l1);
    });

    it('expect nodes are not shared incorrectly', function(){
      expect(l2).to.not.equal(l1);
    });

    it('expect remove to correctly remove nodes and not affect other lists', function(){
      expect(l3.tail()).to.equal(l1.tail().tail());
    });

  });


});

