'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', content: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/login');
      setSession(session);
      fetchItems(session?.user.id);
    });
  }, []);

  const fetchItems = async (userId) => {
    const { data } = await supabase
      .from('items')
      .select('*')
      .eq('user_id', userId)
      .order('id', { ascending: false });
    setItems(data || []);
  };

  const addItem = async () => {
    if (!newItem.title) return;
    await supabase.from('items').insert({
      title: newItem.title,
      content: newItem.content,
      user_id: session.user.id,
    });
    setNewItem({ title: '', content: '' });
    fetchItems(session.user.id);
  };

  const deleteItem = async (id) => {
    await supabase.from('items').delete().eq('id', id);
    fetchItems(session.user.id);
  };

  const startEditing = (item) => {
    setEditingItem(item);
  };

  const updateItem = async () => {
    await supabase
      .from('items')
      .update({
        title: editingItem.title,
        content: editingItem.content,
      })
      .eq('id', editingItem.id);
    setEditingItem(null);
    fetchItems(session.user.id);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mijn Items</h1>

      <input
        placeholder="Titel"
        value={newItem.title}
        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Inhoud"
        value={newItem.content}
        onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
      />
      <br />
      <button onClick={addItem}>Voeg toe</button>

      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginTop: '1rem' }}>
            {editingItem?.id === item.id ? (
              <>
                <input
                  value={editingItem.title}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, title: e.target.value })
                  }
                />
                <br />
                <textarea
                  value={editingItem.content}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, content: e.target.value })
                  }
                />
                <br />
                <button onClick={updateItem}>Opslaan</button>
                <button onClick={() => setEditingItem(null)}>Annuleer</button>
              </>
            ) : (
              <>
                <strong>{item.title}</strong> – {item.content}
                <br />
                <button onClick={() => startEditing(item)}>Bewerk</button>
                <button onClick={() => deleteItem(item.id)}>Verwijder</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

