import { UNKNOWN_EXPRESSION } from '../values';
import Scope from '../scopes/Scope';
import ExecutionPathOptions from '../ExecutionPathOptions';
import { ObjectPath } from '../variables/VariableReassignmentTracker';
import { PatternNode } from './shared/Pattern';
import { ExpressionEntity } from './shared/Expression';
import { NodeBase } from './shared/Node';
import { NodeType } from './NodeType';

export default class ArrayPattern extends NodeBase implements PatternNode {
	type: NodeType.ArrayPattern;
	elements: (PatternNode | null)[];

	reassignPath (path: ObjectPath, options: ExecutionPathOptions) {
		path.length === 0 &&
		this.elements.forEach(child => child && child.reassignPath([], options));
	}

	hasEffectsWhenAssignedAtPath (path: ObjectPath, options: ExecutionPathOptions) {
		return (
			path.length > 0 ||
			this.elements.some(child => child && child.hasEffectsWhenAssignedAtPath([], options))
		);
	}

	initialiseAndDeclare (parentScope: Scope, kind: string, _init: ExpressionEntity | null) {
		this.initialiseScope(parentScope);
		this.elements.forEach(child => child && child.initialiseAndDeclare(parentScope, kind, UNKNOWN_EXPRESSION));
	}
}
