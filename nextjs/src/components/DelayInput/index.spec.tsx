import {
	render,
	screen,
	RenderResult,
	fireEvent,
	act,
} from '@testing-library/react';
import { DelayInput } from './index';

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
	let renderResult: RenderResult;
	let handleChange: jest.Mock;

	beforeEach(() => {
		// タイマーをjestのものに置き換える
		jest.useFakeTimers();

		// モック関数を作成する
		handleChange = jest.fn();

		// モック関数をDelayButtonに渡して描画
		renderResult = render(<DelayInput onChange={handleChange} />);
	});

	afterEach(() => {
		renderResult.unmount();

		// タイマーを元のものに戻す
		jest.useFakeTimers();
	});

	it('span要素のテキストが空であることをテスト', () => {
		const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

		// 初期表示は空
		expect(spanNode).toHaveTextContent('入力したテキスト:');
	});

	it('入力直後はspan要素が「入力中...」と表示するかテスト', () => {
		const inputText = 'Test Input Text';
		const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

		// inputのonChangeイベントを呼び出す
		fireEvent.change(inputNode, { target: { value: inputText } });

		const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

		// 入力中と表示するか確認
		expect(spanNode).toHaveTextContent('入力中...');
	});

	it('入力して1秒後にテキストが表示されるかテスト', async () => {
		const inputText = 'Test Input Text';
		const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

		// inputのonChangeイベントを呼び出す
		fireEvent.change(inputNode, { target: { value: inputText } });

		// act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
		await act(() => {
			// タイマーにセットされたtimeoutをすべて実行する
			jest.runAllTimers();
		});

		const spanNode = screen.getByTestId('display-text') as HTMLSpanElement;

		// 入力したテキストが表示されるか確認
		expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`);
	});

	it('入力して1秒後にonChangeが呼ばれるかテスト', async () => {
		const inputText = 'Test Input Text';
		const inputNode = screen.getByTestId('input-text') as HTMLInputElement;

		// inputのonChangeイベントを呼び出す
		fireEvent.change(inputNode, { target: { value: inputText } });

		// タイマーの実行
		await act(() => {
			jest.runAllTimers();
		});

		// モック関数を渡し、呼ばれたか確認する
		expect(handleChange).toHaveBeenCalled();
	});
});
