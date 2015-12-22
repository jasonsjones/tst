(function() {
    'use strict';

    function TSTNode(value) {
        this.character = null;

        this.right = null;
        this.left = null;
        this.middle = null;

        this.value = value;
    }

    function TST() {
        this.root = null;
        this.size = 0;
    }

    TST.prototype.get = function (key) {
        var node = getNode(this.root, key, 0);
        return node.value;

        function getNode (node, key, idx) {
            if (node === null) {
                return null;
            }
            var c = key[idx];
            if (c < node.character)
                return getNode(node.left, key, idx);
            else if (c > node.character)
                return getNode(node.right, key, idx);
            else if (idx < key.length -1)
                return getNode(node.middle, key, idx + 1);
            else
                return node;
        }
    };

    TST.prototype.put = function (key, value) {
        var self = this;
        this.root = putItem(this.root, key, value, 0);

        function putItem(node, key, value, idx) {
            var c = key[idx];
            if (node === null) {
                node = new TSTNode(value);
                node.character = c;
                self.size++;
            }
            if (c < node.character) {
                node.left = putItem(node.left, key, value, idx);
            } else if (c > node.character) {
                node.right = putItem(node.right, key, value, idx);
            } else if (idx < key.length - 1) {
                node.middle = putItem(node.middle, key, value, idx + 1);
            } else {
                node.value = value;
            }
            return node;
        }
    };

    module.exports = TST;

    if (module.parent === null) {
       main();
    }

    function main() {
        console.log('running module...');
        var tst = new TST();
        tst.put("jason", 32);
        tst.put("jones", 42);
        console.log(tst.get("jones"));
    }

}());
