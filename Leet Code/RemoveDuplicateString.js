/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

let head1 = new ListNode(1, new ListNode(1, new ListNode(2)));
let result1 = deleteDuplicates(head1);
while (result1 !== null) {
    console.log(result1.val); // Output: 1 2
    result1 = result1.next;
}

let head2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
let result2 = deleteDuplicates(head2);
while (result2 !== null) {
    console.log(result2.val); // Output: 1 2 3
    result2 = result2.next;
}