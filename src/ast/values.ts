import { Expression } from './nodes/shared/Expression';

export const UNKNOWN_VALUE = { toString: () => '[[UNKNOWN]]' };

export const UNKNOWN_EXPRESSION: Expression = {
	reassignPath: () => {},
	forEachReturnExpressionWhenCalledAtPath: () => {},
	getValue: () => UNKNOWN_VALUE,
	hasEffectsWhenAccessedAtPath: path => path.length > 0,
	hasEffectsWhenAssignedAtPath: path => path.length > 0,
	hasEffectsWhenCalledAtPath: () => true,
	someReturnExpressionWhenCalledAtPath: () => true,
	toString: () => '[[UNKNOWN]]'
};

export const OBJECT_EXPRESSION: Expression = {
	reassignPath: () => {},
	forEachReturnExpressionWhenCalledAtPath: () => {},
	getValue: () => UNKNOWN_VALUE,
	hasEffectsWhenAccessedAtPath: path => path.length > 1,
	hasEffectsWhenAssignedAtPath: path => path.length > 1,
	hasEffectsWhenCalledAtPath: () => true,
	someReturnExpressionWhenCalledAtPath: () => true,
	toString: () => '[[VIRTUAL OBJECT]]'
};