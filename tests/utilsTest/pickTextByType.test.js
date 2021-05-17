import pickTextByType from '../../utils/pickTextByType';

describe('Pick text by type', () => {
  it('Should return proper habit text in KR', () => {
    const result = pickModalMessage(STRINGS.NONE);
    const result2 = pickModalMessage(STRINGS.INVALID_EMAIL);
    const result3 = pickModalMessage(STRINGS.PASSWORD_MISMATCH);

    expect(result).toEqual(MESSAGE.REGISTER_ALL_INFOS);
    expect(result2).toEqual(MESSAGE.INVALID_EMAIL_FORM);
    expect(result3).toEqual(MESSAGE.PASSWORD_MISMATCH_KR);
  });
});
