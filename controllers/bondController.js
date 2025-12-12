export const addBond = async (req, res) => {
    const bond = await Bond.create(req.body);
    res.json(bond);
};
export const updateBond = async (req, res) => {
    const updated = await Bond.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};
export const getBondByStudent = async (req, res) => {
    const bond = await Bond.find({ studentId: req.params.studentId });
    res.json(bond);
};
