/**
 * Convenience function for clearing all attributes of a parent element at once.
 * This calls `Element.removeAttributeNode()` on each `Attr` node
 *
 * This method runs in linear time, or `O(n)`, where n is the length/value of
 * `Element.attributes.length`
 *
 * @example
 * ```ts
 * // <div class="foobar" dir="ltr"></div>
 * let foobar = document.getElementsByClassName('foobar')[0];
 * clearAttributes(foobar);
 * console.log(foobar.attributes.length); // 0
 * ```
 * @param element - the target element
 */
export function clearAttributes(element: Element): void {
	for (let i = 0; i < element.attributes.length; i++) {
		element.removeAttributeNode(element.attributes.item(0) as Attr);
	}
}

/**
 * Convenience method for clearing all child nodes of a parent node at once.
 * This calls `Node.removeChild()` on each individual child node
 *
 * This method runs in linear time, or `O(n)`, where `n` is the length/value
 * of `Node.childNodes.length`
 * @param parentNode - the target parent node
 */
export function clearChildNodes(parentNode: Node): void {
	for (let i = 0; parentNode.childNodes.length; i++) {
		parentNode.removeChild(parentNode.childNodes.item(i));
	}
}

/**
 * Convenience method for clearing all children elements of a parent element at once.
 * This calls `Node.removeChild()` on each child element
 *
 * This method runs in linear time, or `O(n)`, where n is the length/value of
 * `Element.children.length`
 * @param parentElement - the target parent element
 */
export function clearChildren(parentElement: Element): void {
	for (let i = 0; i < parentElement.children.length; i++) {
		parentElement.removeChild(parentElement.children.item(i) as Node);
	}
}

/**
 * Convenience function for removing all items inside of a `NamedNodeMap`.
 * This calls `NamedNodeMap.removeNamedItem()` on each item
 *
 * This method runs in linear time, or `O(n)`, where `n` is the length
 * of the `NamedNodeMap`
 * @param map - NamedNodeMap instance
 */
export function clearNamedNodeMap(map: NamedNodeMap): void {
	for (let i = 0; i < map.length; i++) {
		map.removeNamedItem((map.item(i) as Attr).name);
	}
}

/**
 * Convenience function around `Document.createAttribute()`, which allows
 * setting the `name` and `value` of the attribute at the same time
 *
 * This method runs in constant time, or `O(1)`.
 * @param name - Name which matches https://www.w3.org/TR/xml/#NT-Name
 * @param value - Value of HTML attribute to insert
 * @see https://dom.spec.whatwg.org/#dom-document-createattribute
 */
export function createAttribute(name: string, value: string): Attr {
	const attr = document.createAttribute(name);
	attr.value = value;
	return attr;
}

/**
 * Convenience function for applying multiple attribute nodes to an element at once.
 * This calls `Element.setAttributeNode()` on each `Attr` node
 *
 * This method runs in linear time, or `O(n)`, where `n` is the length
 * of the `attributes` array parameter
 * @example
 * ```ts
 * const element = document.createElement('div');
 * setAttributeNodes(element, [
 *	createAttribute('lang', 'en-US'),
 *	createAttribute('aria-readonly', 'true'),
 * ]);
 * element.getAttribute('lang'); // 'en-US'
 * ```
 * @param element - the target element
 * @param attributes - an array of HTML attributes
 */
export function setAttributeNodes(element: Element, attributes: Attr[]): void {
	for (const attribute of attributes) {
		element.setAttributeNode(attribute);
	}
}

/**
 * Convenience function for applying multiple attributes to an element at once,
 * using a key-value pair data structure.
 * This function calls `Element.setAttribute()` on each attribute
 *
 * This function runs in linear time, or `O(n)`, where n is the length of
 * the `attributes` array parameter.
 *
 * @example
 * ```ts
 * const element = document.createElement('div');
 * setAttributes(element, {
 *     ariaReadOnly: "true",
 *     lang: "en-US",
 *     draggable: "true",
 * });
 * element.getAttribute('lang'); // "en-US"
 * ```
 * @param element - the target element
 * @param attributes - a map of HTML attributes
 */
export function setAttributes(element: Element, attributes: Map<string, string>): void {
	for (const [qualifiedName, value] of attributes) {
		element.setAttribute(qualifiedName, value);
	}
}
