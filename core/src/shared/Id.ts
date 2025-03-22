export default class Id {
  static gerar(): string {
    const P1 = Math.random().toString(36).substring(2, 9);
    const P2 = Math.random().toString(36).substring(2, 9);
    const P3 = Math.random().toString(36).substring(2, 9);
    return `${P1}-${P2}-${P3}`;
  }
}